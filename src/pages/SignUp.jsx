// src/pages/SignUp.jsx
import { useForm } from 'react-hook-form';
import supabase from '../Supabase/supabase_config'; // ✅ تعديل الاستيراد الصحيح
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Account created. Please check your email to confirm.');
      navigate('/signin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background-color)] px-4">
      <div className="bg-[var(--light-color)] p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[var(--text-color)] mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            />
            {errors.email && (
              <p className="text-sm text-[var(--danger-color)] mt-1">Email is required</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            />
            {errors.password && (
              <p className="text-sm text-[var(--danger-color)] mt-1">Password is required</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[var(--success-color)] text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
