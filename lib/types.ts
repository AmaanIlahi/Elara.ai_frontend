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
    })
  | (BaseMessage & {
      sender: "assistant";
      type: "intake-summary";
      summary: IntakeSummary;
    })
  | (BaseMessage & {
      sender: "assistant";
      type: "appointment-options";
      slots: AppointmentSlot[];
    });


export type IntakeSummary = {
  firstName: string;
  lastName: string;
  dob: string;
  phone: string;
  email: string;
  reason: string;
};

export type AppointmentSlot = {
  id: string;
  doctorName: string;
  specialty: string;
  bodyPart: string;
  date: string;
  time: string;
  weekday: string;
};

export type SchedulingResponse = {
  summary: IntakeSummary;
  slots: AppointmentSlot[];
};

export type SchedulingField = keyof IntakeSummary;

export type SchedulingState = {
  active: boolean;
  currentField: SchedulingField | null;
  data: Partial<IntakeSummary>;
  matchedSlots: AppointmentSlot[];
  filteredSlots: AppointmentSlot[];
  isComplete: boolean;
};