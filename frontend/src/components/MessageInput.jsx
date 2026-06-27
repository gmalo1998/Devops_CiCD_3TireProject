import { useRef, useState } from "react";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

import { useChatStore } from "../store/useChatStore";

const MessageInput = () => {
  const [text, setText] =
    useState("");

  const [imagePreview,
    setImagePreview] =
    useState(null);

  const fileInputRef =
    useRef(null);

  const { sendMessage } =
    useChatStore();

  const handleImageChange =
    (e) => {
      const file =
        e.target.files?.[0];

      if (!file) return;

      if (
        !file.type.startsWith(
          "image/"
        )
      ) {
        toast.error(
          "Please select an image"
        );

        return;
      }

      const reader =
        new FileReader();

      reader.onloadend =
        () => {
          setImagePreview(
            reader.result
          );
        };

      reader.readAsDataURL(
        file
      );
    };

  const removeImage =
    () => {
      setImagePreview(
        null
      );

      if (
        fileInputRef.current
      ) {
        fileInputRef.current.value =
          "";
      }
    };

  const handleSendMessage =
    async (e) => {
      e.preventDefault();

      if (
        !text.trim() &&
        !imagePreview
      ) {
        return;
      }

      try {
        await sendMessage({
          text:
            text.trim(),

          image:
            imagePreview,
        });

        setText("");

        setImagePreview(
          null
        );

        if (
          fileInputRef.current
        ) {
          fileInputRef.current.value =
            "";
        }
      } catch (
        error
      ) {
        console.log(
          error
        );

        toast.error(
          "Failed to send"
        );
      }
    };

  return (
    <div
      className="
      border-t
      border-base-300

      bg-base-100/60

      backdrop-blur-xl

      px-6
      py-5
    "
    >
      {/* IMAGE */}

      {imagePreview && (
        <div
          className="
          mb-5
        "
        >
          <div
            className="
            relative

            inline-block
          "
          >
            <img
              src={
                imagePreview
              }

              alt="preview"

              className="
              w-28
              h-28

              rounded-3xl

              object-cover

              border
              border-base-300

              shadow-lg
            "
            />

            <button
              type="button"

              onClick={
                removeImage
              }

              className="
              absolute

              -top-2
              -right-2

              btn
              btn-circle
              btn-xs

              bg-error

              text-white
            "
            >
              <X
                size={14}
              />
            </button>
          </div>
        </div>
      )}

      {/* INPUT */}

      <form
        onSubmit={
          handleSendMessage
        }

        className="
        flex

        items-center

        gap-4
      "
      >
        <div
          className="
          flex-1

          flex

          items-center

          gap-3

          rounded-full

          bg-base-200/80

          border
          border-base-300

          px-3
          py-2

          shadow-lg
        "
        >
          <button
            type="button"

            onClick={() =>
              fileInputRef.current?.click()
            }

            className={`
            btn

            btn-circle
            btn-sm

            ${
              imagePreview
                ? "bg-primary text-white"
                : "btn-ghost"
            }
          `}
          >
            <Image
              size={18}
            />
          </button>

          <input
            ref={
              fileInputRef
            }

            hidden

            type="file"

            accept="image/*"

            onChange={
              handleImageChange
            }
          />

          <input
            value={
              text
            }

            onChange={(
              e
            ) =>
              setText(
                e.target
                  .value
              )
            }

            type="text"

            placeholder="Write a message..."

            className="
            flex-1

            bg-transparent

            outline-none

            px-1
          "
          />
        </div>

        <button
          type="submit"

          disabled={
            !text.trim() &&
            !imagePreview
          }

          className="
          btn

          btn-circle

          btn-primary

          shadow-xl

          hover:scale-105

          transition
        "
        >
          <Send
            size={18}
          />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;