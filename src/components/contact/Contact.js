import React,{useState} from 'react'
import ContactLeft from './ContactLeft.js'
import Title from '../layout/Title.js';


const contactInput = 'w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300'

const contactTextArea = 'w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none'

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };


  const submitToDb = (e) =>{
    e.preventDefault();
    const res = fetch("https://portfolio-9cb61-default-rtdb.asia-southeast1.firebasedatabase.app/UserData.json",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        username,
        phoneNumber,
        email,
        subject,
        message,
      }),
    }
    );

    if(res){
      
    }
  }



  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      submitToDb(e);
    }

    setTimeout(() => {
        setSuccessMsg("");
    }, 8000);
  };
  return (
    <section
      id="contact"
      className="w-full py-6 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Contact With Me" />
      </div>
      <div className=' w-full'>
        <div className=' w-full h-auto flex justify-between px-10 mx-auto'>
            <ContactLeft/>
            <div className='w-[60%] h-full flex flex-col justify-between '>
                <form className="w-full flex flex-col gap-4 py-2">
                <div className="w-full flex flex-col lgl:flex-row gap-10">
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Your name
                    </p>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        name='username'
                        value={username}
                        className={`${
                        errMsg === "Username is required!" &&
                        "outline-designColor"
                        } ${contactInput}`}
                        type="text"
                        required={true}
                    />
                    </div>
                    <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Phone Number
                    </p>
                    <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        value={phoneNumber}
                        name='phoneNumber'
                        className={`${
                        errMsg === "Phone number is required!" &&
                        "outline-designColor"
                        } ${contactInput}`}
                        type="text"
                    />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                    </p>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                    value={email}
                    className={`${
                        errMsg === "Please give your Email!" &&
                        "outline-designColor"
                    } ${contactInput}`}
                    type="email"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                    </p>
                    <input
                    onChange={(e) => setSubject(e.target.value)}
                    name='subject'
                    value={subject}
                    className={`${
                        errMsg === "Plese give your Subject!" &&
                        "outline-designColor"
                    } ${contactInput}`}
                    type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                    </p>
                    <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    name='message'
                    value={message}
                    className={`${
                        errMsg === "Message is required!" && "outline-designColor"
                    } ${contactTextArea}`}
                    cols="30"
                    rows="8"
                    ></textarea>
                </div>
                <div className="w-full">
                    <button
                    onClick={handleSend}
                    className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                    >
                    Send Message
                    </button>
                </div>
                {errMsg && (
                    <p className=" mt-5 py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-pulse rounded-lg">
                    {errMsg}
                    </p>
                )}
                {successMsg && (
                    <p className="mt-5 py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-pulse rounded-lg">
                    {successMsg}
                    </p>
                )}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact