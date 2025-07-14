/*
  # Insert Admin User

  1. Admin User Creation
    - Create auth user with email: januszjankra@gmail.com
    - Password: jan369750kra
    - Role: super_admin
    - Active status: true

  2. Security
    - User will be automatically added to admin_users table via trigger
    - Full admin privileges granted
*/

-- Insert admin user into auth.users (this will trigger the admin_users creation)
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'januszjankra@gmail.com',
  crypt('jan369750kra', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Janusz Jankra"}',
  now(),
  now(),
  '',
  '',
  '',
  ''
) ON CONFLICT (email) DO NOTHING;

-- Update admin_users table to set super_admin role
UPDATE admin_users 
SET 
  role = 'super_admin',
  full_name = 'Janusz Jankra',
  is_active = true,
  updated_at = now()
WHERE email = 'januszjankra@gmail.com';