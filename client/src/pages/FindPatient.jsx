import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function FindPatient() {
  const [data, setData] = useState({
    image: null,
  });

  const [result, setResult] = useState(null);

  const find = async (e) => {
    e.preventDefault();

    const { image } = data;

    try {
      const formData = new FormData();
      formData.append("image", image);

      const { data: responseData } = await axios.post(
        "/findPatient",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        setData({});
        setResult(responseData);
        toast.success("User Found!!");
      }
    } catch (err) {
      console.log(`FindPatient frontend error: `, err);
      toast.error("Find Patient failed. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={find}>
        <br />
        <br />
        <label>Patient image:</label>
        <input
          type="file"
          onChange={(e) => setData({ image: e.target.files[0] })}
          required
        />

        <br />
        <br />
        <button type="submit">submit</button>
      </form>

      {result && (
        <div>
          <h2>Matching Patient Details:</h2>
          <p>Name: {result.name}</p>
          <p>Father name: {result.fatherName}</p>
          <p>Mother name: {result.motherName}</p>
          <p>Address: {result.address}</p>
          <p>Emergency Contact: {result.emergencyContact}</p>
          <p>Emergency Contact 2: {result.emergencyContact2}</p>
          {/* <p>Emergency Contact 2: {result.image}</p> */}
        </div>
      )}
    </div>
  );
}
