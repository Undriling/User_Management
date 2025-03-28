import { Button } from "@/components/ui/button";
import Header from "./header";

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-gray-50 min-h-screen mt-8">
        <div className="max-w-6xl mx-auto px-6 py-12 font-serif">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900">
            About{" "}
            <span className="text-blue-500">
              usermanager.co
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-center text-lg max-w-3xl mx-auto">
            Your ultimate user management platform, designed
            to simplify role management and seamless data
            handling. Effortlessly manage user accounts,
            track activities, and control access levels—all
            in one place. With secure authentication,
            real-time updates, and an intuitive interface,
            streamline your user management process like
            never before.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/homeImg.jpeg"
                alt="User Management"
                className="rounded-xl shadow-lg hover:scale-110 transition-all cursor-pointer"
              />
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Simplify User Management & Maximize Activity
              </h3>
              <p className="mt-4 text-gray-600 text-lg text-justify leading-relaxed">
                Tripo File is your AI-powered travel
                companion, making itinerary planning
                effortless. Whether you're dreaming of a
                solo adventure, a family getaway, or a
                business trip, we provide smart,
                personalized recommendations tailored to
                your interests and budget. &nbsp;&nbsp;
                <a href="/profile">
                  <span className="text-[#8046FD]">
                    Click to Meet The Creator
                  </span>
                </a>
              </p>

              <div className="mt-6 space-y-4 text-justify leading-relaxed">
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">
                    ✔
                  </span>
                  <p className="text-gray-700 text-lg">
                    Seamless edit user details as your needs
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">
                    ✔
                  </span>
                  <p className="text-gray-700 text-lg">
                    Personalized user details
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">
                    ✔
                  </span>
                  <p className="text-gray-700 text-lg">
                    Real-time stress-free user management
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-blue-500 text-2xl">
                    ✔
                  </span>
                  <p className="text-gray-700 text-lg">
                    Hassle-free management of user profiles
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Ready to boom your user performance? 🚀
            </h3>
            <a href="/dashboard">
              <Button
                className={
                  "w-full my-16 md:w-auto md:h-12 cursor-pointer bg-black hover:bg-gray-700 text-white font-bold transition"
                }>
                Get Started. It's free👆
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
