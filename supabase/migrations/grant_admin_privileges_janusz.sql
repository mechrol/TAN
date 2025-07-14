/*
  # Nadanie Uprawnień Administratora - Janusz Krawczak

  1. Utworzenie Użytkownika Administratora
    - Email: januszjankra@gmail.com
    - Hasło: jan369750kra
    - Rola: super_admin
    - Status: aktywny
    - Pełne imię: Janusz Krawczak

  2. Bezpieczeństwo
    - Użytkownik zostanie automatycznie dodany do tabeli admin_users przez trigger
    - Przyznane pełne uprawnienia administratora
    - Sprawdzenie czy użytkownik już istnieje przed utworzeniem
*/

-- Sprawdź czy użytkownik admin już istnieje, jeśli nie - utwórz go
DO $$
DECLARE
    user_exists boolean;
    new_user_id uuid;
BEGIN
    -- Sprawdź czy użytkownik już istnieje
    SELECT EXISTS(SELECT 1 FROM auth.users WHERE email = 'januszjankra@gmail.com') INTO user_exists;
    
    IF NOT user_exists THEN
        -- Wygeneruj nowy UUID dla użytkownika
        new_user_id := gen_random_uuid();
        
        -- Wstaw użytkownika admin do auth.users
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
            new_user_id,
            'authenticated',
            'authenticated',
            'januszjankra@gmail.com',
            crypt('jan369750kra', gen_salt('bf')),
            now(),
            now(),
            now(),
            '{"provider": "email", "providers": ["email"]}',
            '{"full_name": "Janusz Krawczak"}',
            now(),
            now(),
            '',
            '',
            '',
            ''
        );
        
        RAISE NOTICE 'Użytkownik admin został utworzony pomyślnie z ID: %', new_user_id;
    ELSE
        RAISE NOTICE 'Użytkownik admin już istnieje';
    END IF;
END $$;

-- Zaktualizuj tabelę admin_users aby ustawić rolę super_admin
UPDATE admin_users 
SET 
    role = 'super_admin',
    full_name = 'Janusz Krawczak',
    is_active = true,
    updated_at = now()
WHERE email = 'januszjankra@gmail.com';

-- Potwierdź utworzenie administratora
DO $$
BEGIN
    IF EXISTS(SELECT 1 FROM admin_users WHERE email = 'januszjankra@gmail.com' AND role = 'super_admin' AND is_active = true) THEN
        RAISE NOTICE 'SUKCES: Uprawnienia administratora zostały nadane dla Janusz Krawczak (januszjankra@gmail.com)';
    ELSE
        RAISE NOTICE 'BŁĄD: Nie udało się nadać uprawnień administratora';
    END IF;
END $$;