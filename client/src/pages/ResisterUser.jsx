import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

function ResisterUser() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    address: "",
    emergencyContact: "",
    emergencyContact2: "",
    image: null,
  });

  const register = async (e) => {
    e.preventDefault();

    const {
      name,
      fatherName,
      motherName,
      address,
      emergencyContact,
      emergencyContact2,
      image,
    } = data;

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("fatherName", fatherName);
      formData.append("motherName", motherName);
      formData.append("address", address);
      formData.append("emergencyContact", emergencyContact);
      formData.append("emergencyContact2", emergencyContact2);
      formData.append("image", image);

      const { data } = await axios.post("/createUser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register Successful");
        navigate("/home");
      }
    } catch (err) {
      console.log(`Register frontend error: `, err);
      toast.error("Register failed. Please try again.");
    }
  };

  return (
    <div className="form">
      <h1>Register </h1>
      <form onSubmit={register} className="register-form">
        {/* <h1>Register </h1> */}
        <label className="form-label">Name:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter name "
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />

        <label>Father name:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter father name "
          value={data.fatherName}
          onChange={(e) => setData({ ...data, fatherName: e.target.value })}
          required
        />

        {/* <br /> */}
        <label>Mother name:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter mother name "
          value={data.motherName}
          onChange={(e) => setData({ ...data, motherName: e.target.value })}
          required
        />

        {/* <br /> */}
        <label>Address:</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter address 🏡"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
          required
        />

        {/* <br /> */}
        <label>Emergency Contact:</label>
        <input
          className="form-input"
          type="number"
          placeholder="Enter emergency contact 💃"
          value={data.emergencyContact}
          onChange={(e) =>
            setData({ ...data, emergencyContact: e.target.value })
          }
          required
        />

        {/* <br /> */}
        <label>Emergency Contact 2:</label>
        <input
          className="form-input"
          type="number"
          placeholder="Enter emergency contact 💃"
          value={data.emergencyContact2}
          onChange={(e) =>
            setData({ ...data, emergencyContact2: e.target.value })
          }
          required
        />

        {/* <br /> */}
        <label>Image:</label>
        <input
          className="form-input"
          type="file"
          onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          required
        />

        {/* <br /> */}
        {/* <br /> */}
        <button type="submit" style={{ gridColumn: "span 2" }}>
          submit
        </button>
      </form>
    </div>
  );
}

export default ResisterUser;



