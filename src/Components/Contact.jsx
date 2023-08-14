import React, { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-cool-inview";

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmpvcm80MTAiLCJhIjoiY2wyM3VkeWluMHNsNTNibW00a204ZmRmdiJ9.KUejcuWh4gZzA4uPRLZi6w";
const Contact = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(36.817);
  const [lat, setLat] = useState(-1.286);
  const [zoom, setZoom] = useState(4.39);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    new mapboxgl.Marker()
      .setLngLat({ lng: 36.817, lat: -1.286 })
      .addTo(map.current);
  },[]);

  useEffect(() => {
    new mapboxgl.NavigationControl();
  },[]);

  useEffect(() => {
    if (!map.current) return; // wait htmlFor map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  },[]);

  //email

  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const messageRef = useRef(null);

  const form = useRef();

  const captchaRef = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_9e4c6p4",
        "template_3za7t3b",
        form.current,
        "JhdUo3HDR0IraS82N"
      )
      .then(
        (result) => {
          nameRef.current.value = "";
          mailRef.current.value = "";
          messageRef.current.value = "";
          Toast.fire({
            icon: "success",
            title: "Message sent",
          });
          console.log(result.text);
        },
        (error) => {
          Toast.fire({
            icon: "error",
            title: "Error, not sent",
          });
        }
      );
  };

  async function onExpired(value) {
    await Toast.fire({
      icon: "error",
      title: "reCAPTCHA Expired",
    });
  }

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
  });

  const contactVariants = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: 50, opacity: 0 },
  };

  const control = useAnimation();
  const { observe, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    // unobserveOnEnter: true,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: "-100px 100px",
  });

  useEffect(() => {
    if (inView) {
      control.start("visible");
      // console.log(inView, "visible");
    } else {
      control.start("hidden");
      // console.log("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      variants={contactVariants}
      initial="hidden"
      animate={control}
      ref={observe}
      name="contact"
      className="relative flex flex-wrap lg:h-screen lg:items-center bg-red-400/10"
    >
      <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-Londrina  font-bold sm:text-3xl">
            I'm just a send button away
          </h1>

          <p className="mt-4 pb-4 font-Dosis font-bold ">
            Want a reliable and capable developer, want to say hi, do you have
            feedback about my portfolio, just send me a message and I'll get
            back to you as soon as I can.
          </p>
        </div>

        <form
          id="cont"
          ref={form}
          onSubmit={(event) => {
            event.preventDefault();
            captchaRef.current.execute();
          }}
          className="space-y-2 px-12"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg bg-slate-700"
                placeholder="Your name"
                type="text"
                name="name"
                ref={nameRef}
                id="name"
                required
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 text-sm border-gray-200 rounded-lg bg-slate-700"
                placeholder="Email address"
                type="email"
                name="email"
                ref={mailRef}
                id="email"
                required
              />
            </div>
          </div>
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 text-sm border-gray-200 rounded-lg bg-slate-700"
              placeholder="Message"
              rows="4"
              id="message"
              name="message"
              ref={messageRef}
              required
            ></textarea>
          </div>

          <ReCAPTCHA
            sitekey="6LfGJCYhAAAAAJRGk3tvQ4lrrtAPiDhDnp4020yE"
            size="invisible"
            theme="light"
            ref={captchaRef}
            onChange={sendEmail}
            onExpired={onExpired}
            badge="bottomleft"
          />
          <div className="mt-4 md:mt-8">
            <input
              type="submit"
              value="Send"
              className="w-full cursor-pointer outline btn glass rounded-md px-12 py-3 bg-transparent hover:text-white hover:bg-yellow-700 hover:focus:ring focus:ring-slate-400 transition"
            />
          </div>
        </form>
      </div>

      <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
        <div className="font-Dosis font-bold px-4 text-center">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="h-full  w-full" />
      </div>
    </motion.section>
  );
};

export default Contact;
