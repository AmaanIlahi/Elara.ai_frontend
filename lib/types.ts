export type Sender = "user" | "assistant";

export type QuickReply = {
  id: string;
  label: string;
};

export type BookingCardData = {
  provider_name: string;
  specialty: string;
  body_part: string;
  booked_slot: {
    date: string;
    time: string;
  };
};

type BaseMessage = {
  id: string;
  sender: Sender;
  text: string;
  createdAt: string;
};

export type Message =
  | (BaseMessage & {
      type: "text";
      quickReplies?: QuickReply[];
    })
  | (BaseMessage & {
      sender: "assistant";
      type: "typing";
    })
  | (BaseMessage & {
      sender: "assistant";
      type: "booking-card";
      booking: BookingCardData;
    });