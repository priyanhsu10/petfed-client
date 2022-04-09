import React from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container top-14">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-3">
            <label className="form-label">User name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <div className="text-orange-600">username is required</div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwrod"
              {...register("paswword", { required: true })}
            />
            {errors.paswword && (
              <div className="text-orange-600">password is required</div>
            )}
          </div>
          <div className="md-3">
            <button type="submit" className="btn btn-primary bg-orange-400">
              login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
