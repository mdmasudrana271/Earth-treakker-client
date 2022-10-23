import React from "react";
import { Link } from "react-router-dom";
import './Booking.css'
import logo from '../../assets/images/Rectangle 28.png'

const Booking = () => {
  return (
    <div className=" pt-20 flex justify-evenly items-center ">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-semibold text-xl">Origin</span>
            </label>
            <input
              type="text"
              name='origin'
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-semibold text-xl">Destination</span>
            </label>
            <input
              type="text"
              placeholder=""
              name='destination'
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-between gap-2">
                <div className="">
                    <label className="label">
                    <span className="label-text">From</span>
                    </label>
                    <input
                    type="date"
                    placeholder=""
                    name='from'
                    className="input input-bordered w-full text-sm"
                    required
                    />
                </div>
                <div>
                    <label className="label">
                    <span className="label-text">To</span>
                    </label>
                    <input
                    type="date"
                    placeholder=""
                    name='to'
                    className="input input-bordered w-full text-sm"
                    required
                    />
                </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-400 border-none w-full">
              <Link to='/hotels'>Start Booking</Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Booking;
