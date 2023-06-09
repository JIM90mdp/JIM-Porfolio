import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import ButtonSend from "../components/ButtonSend/ButtonSend";

const Contact = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  // return isDesktop ? (
  return (
    <section id="contact" className="relative bg-opaque-black top-[30px] overflow-hidden">
      {/* HEADINGS */}
      <LineGradient width="w-[100%]" />
      <motion.div
        className="mx-auto text-center relative top-[30px] flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-green3">FEEL FREE TO CONTACT ME</span>
        </p>
        <div className="flex justify-center m-3 sm:w-[40%] w-[100%]">
          <LineGradient width="w-2/3" />
        </div>
      </motion.div>

      {/* FORM */}
      <div className="flex flex-col items-center m-5 justify-center">
        <motion.div
          className="basis-1/2 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/39a45076300939578bae14d9eac91666"
            method="POST"
          >
            <input
              className="w-full bg-green text-dark-green font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full  bg-green text-dark-green font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full  bg-green text-dark-green font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <div className="flex justify-center text-center m-5 pb-7">
              <ButtonSend type="submit" />
            </div>
          </form>
        </motion.div>
      </div>
      <LineGradient width="w-[100%]" className="bottom-0 relative" />
    </section>
  );
  // : (
  //   <section
  //     id="contact"
  //     className="relative bg-opaque-black pt-5 pb-5 top-[15px] w-[100%] p-5"
  //   >
  //     {/* HEADINGS */}
  //     <motion.div
  //       initial="hidden"
  //       whileInView="visible"
  //       viewport={{ once: true, amount: 0.5 }}
  //       transition={{ duration: 0.5 }}
  //       variants={{
  //         hidden: { opacity: 0, x: 50 },
  //         visible: { opacity: 1, x: 0 },
  //       }}
  //       className="flex justify-center w-full text-center"
  //     >
  //       <div>
  //         <p className="font-playfair font-semibold text-4xl">
  //           <span className="text-green3">CONTACT ME</span>
  //         </p>
  //         <div className="flex justify-center my-5">
  //           <LineGradient width="w-1/2" />
  //         </div>
  //       </div>
  //     </motion.div>

  //     {/* FORM */}
  //     <div className="md:flex md:justify-center gap-16 mt-5">
  //       <motion.div
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true, amount: 0.5 }}
  //         transition={{ delay: 0.2, duration: 0.5 }}
  //         variants={{
  //           hidden: { opacity: 0, y: 50 },
  //           visible: { opacity: 1, y: 0 },
  //         }}
  //         className="basis-1/2 mt-10 md:mt-0"
  //       >
  //         <form
  //           target="_blank"
  //           onSubmit={onSubmit}
  //           action="https://formsubmit.co/39a45076300939578bae14d9eac91666"
  //           method="POST"
  //         >
  //           <input
  //             className="w-full bg-green text-dark-green font-semibold placeholder-opaque-black p-3"
  //             type="text"
  //             placeholder="NAME"
  //             {...register("name", {
  //               required: true,
  //               maxLength: 100,
  //             })}
  //           />
  //           {errors.name && (
  //             <p className="text-red mt-1">
  //               {errors.name.type === "required" && "This field is required."}
  //               {errors.name.type === "maxLength" && "Max length is 100 char."}
  //             </p>
  //           )}

  //           <input
  //             className="w-full  bg-green text-dark-green font-semibold placeholder-opaque-black p-3 mt-5"
  //             type="text"
  //             placeholder="EMAIL"
  //             {...register("email", {
  //               required: true,
  //               pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //             })}
  //           />
  //           {errors.email && (
  //             <p className="text-red mt-1">
  //               {errors.email.type === "required" && "This field is required."}
  //               {errors.email.type === "pattern" && "Invalid email address."}
  //             </p>
  //           )}

  //           <textarea
  //             className="w-full  bg-green text-dark-green font-semibold placeholder-opaque-black p-3 mt-5"
  //             name="message"
  //             placeholder="MESSAGE"
  //             rows="4"
  //             cols="50"
  //             {...register("message", {
  //               required: true,
  //               maxLength: 2000,
  //             })}
  //           />
  //           {errors.message && (
  //             <p className="text-red mt-1">
  //               {errors.message.type === "required" &&
  //                 "This field is required."}
  //               {errors.message.type === "maxLength" &&
  //                 "Max length is 2000 char."}
  //             </p>
  //           )}
  //           <div className="flex justify-center text-center m-5">
  //             <ButtonSend type="submit" />
  //           </div>
  //         </form>
  //       </motion.div>
  //     </div>
  //   </section>
  // );
};

export default Contact;
