import { MessageSquare, Sparkles } from "lucide-react";

const AuthImagePattern = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className="
      hidden
      lg:flex

      relative

      overflow-hidden

      items-center
      justify-center

      min-h-screen

      bg-gradient-to-br
      from-indigo-950
      via-base-100
      to-purple-950

      p-12
    "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        top-[-150px]
        right-[-100px]

        size-[400px]

        rounded-full

        bg-primary/20

        blur-[150px]
      "
      />

      <div
        className="
        absolute

        bottom-[-120px]
        left-[-100px]

        size-[350px]

        rounded-full

        bg-secondary/20

        blur-[150px]
      "
      />

      {/* CONTENT */}

      <div
        className="
        relative

        z-10

        max-w-xl

        text-center
      "
      >
        {/* Floating Cards */}

        <div
          className="
          relative

          h-[320px]

          mb-12
        "
        >
          {/* CENTER */}

          <div
            className="
            absolute

            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            size-28

            rounded-3xl

            bg-gradient-to-br
            from-primary
            to-secondary

            flex
            items-center
            justify-center

            shadow-[0_20px_80px_rgba(80,80,255,.5)]

            animate-pulse
          "
          >
            <MessageSquare className="size-14 text-white" />
          </div>

          {/* CARD 1 */}

          <div
            className="
            absolute

            left-10
            top-10

            w-44

            rounded-3xl

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            p-5

            animate-bounce
          "
            style={{
              animationDuration:
                "5s",
            }}
          >
            <div className="flex gap-3">

              <div className="size-10 rounded-full bg-primary" />

              <div className="flex-1">

                <div className="h-3 rounded bg-white/20 mb-2" />

                <div className="h-2 rounded bg-white/10 w-2/3" />

              </div>

            </div>
          </div>

          {/* CARD 2 */}

          <div
            className="
            absolute

            right-8
            top-24

            w-52

            rounded-3xl

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            p-5

            animate-bounce
          "
            style={{
              animationDuration:
                "7s",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-primary" />

              <span className="font-semibold">
                Real-time Chat
              </span>
            </div>

            <div className="space-y-2">

              <div className="h-3 rounded bg-white/20" />

              <div className="h-3 rounded bg-white/10 w-3/4" />

            </div>

          </div>

          {/* CARD 3 */}

          <div
            className="
            absolute

            left-28
            bottom-8

            w-48

            rounded-3xl

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            p-5

            animate-bounce
          "
            style={{
              animationDuration:
                "6s",
            }}
          >
            <div className="flex gap-2">

              <div className="size-3 rounded-full bg-success" />

              <span>
                Connected
              </span>

            </div>
          </div>

        </div>

        {/* TEXT */}

        <h2
          className="
          text-5xl

          font-black

          mb-6
        "
        >
          {title}
        </h2>

        <p
          className="
          text-lg

          opacity-70

          leading-relaxed
        "
        >
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default AuthImagePattern;