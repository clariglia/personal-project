import { useState } from "react";
import AboutModal from "../Modals/AboutModal";
import ContactModal from "../Modals/ContactModal";
import IntroModal from "../Modals/IntroModal";
import WorkModal from "../Modals/WorkModal";

export default function ButtonsHero() {
  const [IntroOpenModal, setIntroOpenModal] = useState(false);
  const [AboutOpenModal, setAboutOpenModal] = useState(false);
  const [WorkOpenModal, setWorkOpenModal] = useState(false);
  const [ContactOpenModal, setContactOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIntroOpenModal(true);
        }}
        className="cursor rounded-l-md border-2 hover:bg-[#0e7490]/25 border-[#0e7490] text-white w-28 duration-200">
        INTRO
      </button>
      <button
        onClick={() => {
          setAboutOpenModal(true);
        }}
        className="cursor border-y-[#0e7490] hover:bg-[#0e7490]/25 border-2 border-x-0 text-white w-28 duration-200">
        ABOUT
      </button>
      <button
        onClick={() => {
          setWorkOpenModal(true);
        }}
        className="cursor text-white w-28 border-2 hover:bg-[#0e7490]/25 border-y-[#0e7490] border-l-[#0e7490] border-r-0 duration-200">
        WORK
      </button>
      <button
        onClick={() => {
          setContactOpenModal(true);
        }}
        className="cursor rounded-r-md border-2 border-[#0e7490] text-white w-28 hover:bg-[#0e7490]/25 duration-200">
        CONTACT
      </button>

      {IntroOpenModal && <IntroModal closeIntroModal={setIntroOpenModal} />}
      {AboutOpenModal && <AboutModal closeAboutModal={setAboutOpenModal} />}
      {WorkOpenModal && <WorkModal closeWorkModal={setWorkOpenModal} />}
      {ContactOpenModal && (
        <ContactModal closeContactModal={setContactOpenModal} />
      )}
    </>
  );
}
