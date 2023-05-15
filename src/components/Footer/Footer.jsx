function Footer() {
  return (
    <div className=" bg-black px-16 py-16">
      <div className="container flex px-10 py-16 text-white">
        <div className="flex-auto p-5">
          <h1 className="text-2xl font-semibold mb-5">CareerHub</h1>
          <p className="text-sm font-light">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-3 my-3">
            <button className="bg-white p-2 rounded-full">
              <img className="" src="/src/assets/assets/Icons/Frame-1.png" />
            </button>
            <button className="bg-white p-2 rounded-full">
              <img className="" src="/src/assets/assets/Icons/Frame-1.png" />
            </button>
            <button className="bg-white p-2 rounded-full">
              <img className="" src="/src/assets/assets/Icons/Frame-1.png" />
            </button>
          </div>
        </div>
        <div className="flex-auto p-5">
          <h1 className="text-2xl font-semibold mb-5">Company</h1>
          <ul className="text-sm font-light">
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex-auto p-5">
          <h1 className="text-2xl font-semibold mb-5">Product</h1>
          <ul className="text-sm font-light">
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="flex-auto p-5">
          <h1 className="text-2xl font-semibold mb-5">Support</h1>
          <ul className="text-sm font-light">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className="flex-auto p-5">
          <h1 className="text-2xl font-semibold mb-5">Contact</h1>
          <ul className="text-sm font-light">
            <li>524 Broadway , NYC</li>
            <li>+1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
      <hr className="mx-10" />
      <div className="text-white flex justify-between mx-10 mt-8">
        <p className="text-xs">@2023 CareerHub. All Rights Reserved</p>
        <p className="text-xs">Powered by CareerHub</p>
      </div>
    </div>
  );
}

export default Footer;
