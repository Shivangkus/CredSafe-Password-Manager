import React,{useState} from "react";

export const Manager = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [form, setform] = useState({site:'',username:'',password:''})

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };
  const savepassword = () => {
    console.log(form);

  }
  const handleChange = (e) => {
    setform({...form,[e.target.name]:e.target.value})
  }

 
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
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
            placeholder="Enter Website URL" onChange={handleChange}
            className="rounded-full border border-purple-500 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username} onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type="text"
              name="username"
              id=""
            />
            <div className="relative w-2/3">
              <input
                value={form.password} onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-purple-500 w-full p-4 py-1"
                type={passwordVisible ? "text" : "password"}
                name="password"
                id=""
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
          '
          <button onClick={savepassword} className="text-purple-100 gap-2 bg-purple-700 flex justify-center items-center rounded-full px-8 py-2 w-fit hover:bg-purple-500 border border-purple-600">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  )
}