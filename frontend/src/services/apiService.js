var URL = "http://127.0.0.1:8000/api";

export default {
    async registerUser(
        name,
        email,
        password,
        zip_code,
        user_level,
        document,
        profile_image,
        phone,
    ) {
        console.log(email, password, phone);
        try {
            const response = await fetch(URL + "/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    zip_code,
                    user_level,
                    document,
                    profile_image,
                    phone,
                })
            });

            console.log('Response:', response);

            if (!response.ok) {
                const text = await response.text();
                console.error('Response text:', text);
                throw new Error('register failed');
            }

            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                console.log('Response data:', data);
                const token = data.authorization.token;

                if (!token) {
                    throw new Error('Token not found');
                }

                localStorage.setItem('token', token);
                return true;
            } else {
                const text = await response.text();
                console.error('Expected JSON, got:', text);
                throw new Error('Unexpected response format');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            return false;
        }
    }
};