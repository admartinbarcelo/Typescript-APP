import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              <img alt="logo" src={Logo} />
              <p className="my-5">
              For any inquiries or additional information, feel free to contact us. We are here to assist you on your journey to a healthier and fitter life.
              </p>
              <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Links</h4>
              <p className="my-5">About Us</p>
              <p className="my-5">Trainers</p>
              <p className="my-5">Policies and Terms</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Contact Us</h4>
              <p className="my-5">Get in touch with us today! Our team is here to assist you on your fitness journey. Contact us now!</p>
              <p>(333)425-6825</p>
            </div>
          </div>
        </footer>
      );
};

export default Footer;
