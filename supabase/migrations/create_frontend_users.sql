/*
  # Create Frontend Users System

  1. New Tables
    - `frontend_users`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `username` (text, unique)
      - `full_name` (text)
      - `avatar_url` (text)
      - `bio` (text)
      - `is_active` (boolean, default true)
      - `last_login` (timestamptz)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `frontend_users` table
    - Add policy for authenticated users to read their own data
    - Add policy for users to read other user profiles
    - Add policy for users to update their own data

  3. Functions
    - Create function to handle frontend user creation on auth signup
    - Create trigger to automatically create frontend_users record
    - Create function to update last_login for frontend users
*/

-- Create frontend_users table
CREATE TABLE IF NOT EXISTS frontend_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  username text UNIQUE,
  full_name text,
  avatar_url text,
  bio text,
  is_active boolean DEFAULT true,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE frontend_users ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON frontend_users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read other user profiles"
  ON frontend_users
  FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Users can update own data"
  ON frontend_users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Function to generate unique username
CREATE OR REPLACE FUNCTION generate_username(email_input text)
RETURNS text AS $$
DECLARE
  base_username text;
  final_username text;
  counter integer := 0;
BEGIN
  -- Extract base username from email
  base_username := split_part(email_input, '@', 1);
  final_username := base_username;
  
  -- Check if username exists and increment counter if needed
  WHILE EXISTS (SELECT 1 FROM frontend_users WHERE username = final_username) LOOP
    counter := counter + 1;
    final_username := base_username || counter::text;
  END LOOP;
  
  RETURN final_username;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle frontend user creation
CREATE OR REPLACE FUNCTION handle_frontend_user_creation()
RETURNS TRIGGER AS $$
DECLARE
  user_metadata jsonb;
  generated_username text;
BEGIN
  user_metadata := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  
  -- Only create frontend_users record if this is not an admin user
  IF NOT EXISTS (SELECT 1 FROM admin_users WHERE id = NEW.id) THEN
    -- Generate unique username
    generated_username := generate_username(NEW.email);
    
    INSERT INTO frontend_users (id, email, username, full_name)
    VALUES (
      NEW.id,
      NEW.email,
      generated_username,
      COALESCE(user_metadata->>'full_name', split_part(NEW.email, '@', 1))
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for frontend user creation
DROP TRIGGER IF EXISTS on_auth_user_created_frontend ON auth.users;
CREATE TRIGGER on_auth_user_created_frontend
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_frontend_user_creation();

-- Function to update frontend user last_login
CREATE OR REPLACE FUNCTION update_frontend_last_login(user_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE frontend_users 
  SET last_login = now(), updated_at = now()
  WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;