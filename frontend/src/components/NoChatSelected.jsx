import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div
      className="
      flex-1

      flex

      items-center

      justify-center

      bg-gradient-to-br

      from-base-100
      via-base-200
      to-base-300

      relative

      overflow-hidden
    "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute

        w-[420px]
        h-[420px]

        rounded-full

        bg-primary/10

        blur-[120px]
      "
      />

      {/* CONTENT */}

      <div
        className="
        relative

        z-10

        text-center

        max-w-lg

        px-8
      "
      >
        {/* ICON */}

        <div
          className="
          relative

          mx-auto

          w-fit

          mb-10
        "
        >
          {/* OUTER */}

          <div
            className="
            absolute

            inset-0

            rounded-[36px]

            bg-primary/20

            animate-pulse

            blur-2xl
          "
          />

          {/* MAIN */}

          <div
            className="
            relative

            size-32

            rounded-[36px]

            bg-gradient-to-r

            from-primary
            to-secondary

            flex

            items-center

            justify-center

            shadow-2xl

            animate-bounce
          "
          >
            <MessageSquare
              className="
              text-white

              w-14
              h-14
            "
            />
          </div>
        </div>

        {/* TITLE */}

        <h1
          className="
          text-5xl

          font-black

          mb-5
        "
        >
          Welcome to
          <span
            className="
            ml-3

            bg-gradient-to-r

            from-primary
            to-secondary

            bg-clip-text

            text-transparent
          "
          >
            HelloChat
          </span>
        </h1>

        {/* TEXT */}

        <p
          className="
          text-lg

          leading-8

          opacity-70
        "
        >
          Select a conversation
          from the sidebar and
          start chatting in
          real time.
        </p>

        {/* SMALL CARD */}

        <div
          className="
          mt-10

          rounded-3xl

          bg-base-100/60

          backdrop-blur-xl

          border
          border-base-300

          p-5

          shadow-lg
        "
        >
          <p
            className="
            text-sm

            opacity-60
          "
          >
            💬 Messages appear
            here after selecting
            a contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;