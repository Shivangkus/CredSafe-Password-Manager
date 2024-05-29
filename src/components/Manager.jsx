import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pencil, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { ConfirmDialog } from "primereact/confirmdialog";

export const Manager = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");

    if (passwords) {
      try {
        const parsedPasswords = JSON.parse(passwords);
        if (Array.isArray(parsedPasswords)) {
          setPasswordArray(parsedPasswords);
        } else {
          console.error("Parsed passwords is not an array:", parsedPasswords);
          setPasswordArray([]); // Initialize as an empty array
        }
      } catch (error) {
        console.error("Error parsing passwords:", error);
        setPasswordArray([]); // Initialize as an empty array
      }
    }
  }, []);

  const savePassword = () => {
    const updatedPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    console.log("Updated Password Array:", updatedPasswordArray); // Logging the updated password array
    setForm({ site: "", username: "", password: "" });
  };

  const deletePassword = (id) => {
    console.log("deleteing this id", id);
let c = confirm("Do you really want to delete this password?")
if(c)
    {
      const updatedPasswordArray = passwordArray.filter(
        (item) => item.id !== id
      );

      setPasswordArray(updatedPasswordArray);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
      console.log("Updated Password Array:", updatedPasswordArray); // Logging the updated password array
    }
  };

  const editPassword = (id) => {
    console.log("editing this id", id);
    setForm(passwordArray.filter((item) => item.id === id)[0]);
    const updatedPasswordArray = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(updatedPasswordArray);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
    console.log("Updated Password Array:", updatedPasswordArray); // Logging the updated password array
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Bounce
      />
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className=" text-white  mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-purple-500">&lt;</span>Cred
          <span className="text-purple-500">Safe/&gt;</span>
        </h1>
        <p className="text-center text-lg text-purple-50">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 gap-3 items-center">
          <input
            value={form.site}
            placeholder="Enter Website URL"
            onChange={handleChange}
            className="rounded-full border border-purple-500 w-full p-4 py-1"
            type="text"
            name="site"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type="text"
              name="username"
            />
            <div className="relative w-2/3">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-purple-500 w-full p-4 py-1"
                type={passwordVisible ? "text" : "password"}
                name="password"
              />
              <span
                className="absolute right-1 top-1 cursor-pointer "
                onClick={togglePasswordVisibility}
              >
                <img
                  className="p-1"
                  width={28}
                  src={
                    passwordVisible ? "/public/hidden.png" : "/public/eye.png"
                  }
                  alt="eye"
                ></img>
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="text-purple-100 gap-2 bg-purple-700 flex justify-center items-center rounded-full px-8 py-2 w-fit hover:bg-purple-500 border border-purple-600"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 ? (
            <div>No Password to show</div>
          ) : (
            <table className="table-auto w-full rounded-xl overflow-hidden ">
              <thead className="bg-purple-400 text-black">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-purple-950 ">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" items-center py-2 hover:underline">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div className="cursor-pointer size-7 px-1">
                            <lord-icon
                              style={{
                                width: "16px",
                                height: "30px",
                                padddingTop: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" text-center w-12 py-2">
                        <div className="flex items-center justify-center">
                          {item.username}
                          <div className="cursor-pointer size-7">
                            <lord-icon
                              style={{
                                width: "16px",
                                height: "30px",
                                padddingTop: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className=" text-center w-12 py-2">
                        <div className="flex items-center justify-center">
                          {item.password}
                          <div className="cursor-pointer size-7">
                            <lord-icon
                              style={{
                                width: "16px",
                                height: "30px",
                                padddingTop: "3px",
                              }}
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center justify-center w-12 py-2">
                        <div className="flex cursor-pointer px-16 gap-2">
                          <Pencil
                            onClick={() => {
                              editPassword(item.id);
                            }}
                            size={19}
                            color="#fdb4fe "
                          />

                          <Trash2
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                            size={19}
                            color="#fdb4fe"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
