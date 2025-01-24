
export default function MainContent() {
  return (
    <div className="flex flex-col items-center self-stretch px-8 pt-8 pb-16 gap-[64px] bg-white">
      <img src="/assets/number.png" alt="number" />
      <div className="grid grid-cols-2 gap-4">
        <img src="/assets/desktop/image-woman-in-videocall.jpg" alt="woman-in-videocall" />
        <img src="/assets/desktop/image-women-videochatting.jpg" alt="women-videochatting" />
        <img src="/assets/desktop/image-men-in-meeting.jpg" alt="men-in-meeting" />
        <img src="/assets/desktop/image-man-texting.jpg" alt="man-texting" />
      </div>
      <div className="flex flex-col items-center text-center">
        <span className="text-xs font-black uppercase leading-[0.825em] tracking-[.25em] text-[#4D96A9] mb-4">Built for modern use</span>
        <h2 className="text-[32px] font-black leading-[35.2px] text-[#28283D] mb-8">Smarter meetings, all in one place</h2>
        <p className="text-base font-medium text-[#87879D]">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
      </div>
    </div>
  )
}
