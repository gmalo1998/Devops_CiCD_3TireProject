import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Palette, Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  {
    id: 1,
    content: "Hey! How's your new theme?",
    isSent: false,
  },
  {
    id: 2,
    content: "Looks amazing 🔥",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="h-screen pt-20 px-5 overflow-hidden">

      <div className="h-full max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-5">

          <div className="flex items-center gap-3">

            <div className="p-3 rounded-2xl bg-primary/10">
              <Palette className="text-primary" />
            </div>

            <div>

              <h1 className="text-3xl font-black">
                Theme Settings
              </h1>

              <p className="text-base-content/60">
                Select and preview instantly
              </p>

            </div>

          </div>

        </div>


        {/* MAIN */}

        <div className="grid lg:grid-cols-[320px_1fr] gap-5 h-[calc(100%-80px)]">

          {/* LEFT */}

          <div
            className="
              rounded-3xl
              border
              bg-base-100
              overflow-hidden
              flex
              flex-col
            "
          >

            <div className="p-6 border-b">

              <h2 className="font-bold text-xl">
                Themes
              </h2>

              <p className="text-sm text-base-content/60">
                Scroll to explore
              </p>

            </div>


            {/* SCROLLABLE COLORS */}

            <div
              className="
                flex-1
                overflow-y-auto
                p-4
              "
            >

              <div className="grid grid-cols-2 gap-3">

                {THEMES.map((t) => (

                  <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`
                      rounded-2xl
                      p-2
                      border
                      transition
                      hover:scale-[1.03]

                      ${
                        theme === t
                          ? "border-primary bg-primary/10"
                          : "border-base-300"
                      }
                    `}
                  >

                    <div
                      data-theme={t}
                      className="h-16 rounded-xl overflow-hidden"
                    >

                      <div className="grid grid-cols-2 h-full">

                        <div className="bg-primary" />
                        <div className="bg-secondary" />

                        <div className="bg-accent" />
                        <div className="bg-neutral" />

                      </div>

                    </div>

                    <p className="text-xs mt-2 capitalize">
                      {t}
                    </p>

                  </button>

                ))}

              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div
            className="
              rounded-3xl
              border
              bg-base-100
              overflow-hidden
              flex
              flex-col
            "
          >

            <div className="px-6 py-5 border-b">

              <h2 className="text-2xl font-bold">
                Live Preview
              </h2>

            </div>


            <div
              className="
                flex-1
                flex
                justify-center
                items-center
                p-5
              "
            >

              <div
                className="
                  w-full
                  max-w-3xl
                  rounded-[30px]
                  overflow-hidden
                  border
                  shadow-lg
                "
              >

                {/* Preview Header */}

                <div className="p-4 border-b">

                  <div className="flex gap-3">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-primary
                      "
                    />

                    <div>

                      <h3 className="font-bold">
                        John Doe
                      </h3>

                      <p className="text-green-500 text-sm">
                        Online
                      </p>

                    </div>

                  </div>

                </div>


                {/* Messages */}

                <div
                  className="
                    h-[300px]
                    p-6
                    space-y-5
                  "
                >

                  {PREVIEW_MESSAGES.map((message) => (

                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >

                      <div
                        className={`
                          px-5
                          py-3
                          rounded-3xl
                          max-w-[70%]

                          ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }
                        `}
                      >

                        {message.content}

                      </div>

                    </div>

                  ))}

                </div>


                {/* Input */}

                <div className="p-4 border-t">

                  <div className="flex gap-3">

                    <input
                      className="input input-bordered flex-1 rounded-full"
                      value="Type message..."
                      readOnly
                    />

                    <button className="btn btn-primary rounded-full">

                      <Send size={18} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SettingsPage;