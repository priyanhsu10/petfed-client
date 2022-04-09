import React from "react";
import { useForm } from "react-hook-form";

export const Register = () => {
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
          <div className="row">
            <div className="col-6">
              <label className="form-label">Enter firstname</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                {...register("firstname", { required: true })}
              />
              {errors.username && (
                <div className="text-orange-600">firstname is required</div>
              )}
            </div>
            <div className="col-6">
              <label className="form-label">Enter username</label>
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
          </div>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Enter mobileNumber</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                {...register("mobileNumber", { required: true })}
              />
              {errors.username && (
                <div className="text-orange-600">username is required</div>
              )}
            </div>
            <div className="col-6">
              <label className="form-label">Enter userType</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                {...register("userType", { required: true })}
              />
              {errors.username && (
                <div className="text-orange-600">userType is required</div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
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
            <div className="col-6">
              <label className="form-label">Enter user Name</label>
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
          </div>
          <div className="row">
            <div className="" style={{ marginTop: "20px" }}>
              address
            </div>
            <div className="row">
              <div className="col-6">
                {" "}
                <label className="form-label">select contry</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  {...register("country", { required: true })}
                />
                {errors.username && (
                  <div className="text-orange-600">username is required</div>
                )}
              </div>
              <div className="col-6">
                <label className="form-label">select state</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  {...register("state", { required: true })}
                />
                {errors.username && (
                  <div className="text-orange-600">state is required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <label className="form-label">area </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  {...register("state", { required: true })}
                />
                {errors.username && (
                  <div className="text-orange-600">state is required</div>
                )}
              </div>
              <div className="col-6"></div>
            </div>
            <div className="row">
              <div className="col-6">lang</div>
              <div className="col-6">latitude</div>
            </div>
          </div>
          <div className="md-3 top-9">
            <button
              type="submit"
              className=" top-9 btn btn-primary bg-orange-400"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
