import Image from "next/image";

const ASSET = "/sites/collabio-com-a1b2c3d4/root-e5f6g7h8/about";

const teamMembers = [
  { name: "Reena Rose", role: "The One Who Handles Money,\nMandates, and Memes", image: `${ASSET}/reena_rose.webp` },
  { name: "Aashish Shetty", role: "The One Who Hires, Fires,\nand Inspires", image: `${ASSET}/aashish.webp` },
  { name: "Rumana Khan", role: "The One Who Turns Followers\nInto Fans", image: `${ASSET}/rumana.webp` },
  { name: "Shraddha Gadkari", role: "The One Who Gets It Done\nBefore It's Even Asked", image: `${ASSET}/shraddha.webp` },
  { name: "Robin Ransom", role: "The One Who Plots, Plans,\nand Makes Profits", image: `${ASSET}/robin.webp` },
  { name: "Harshal Gaikwad", role: "The One Who Finds Stars\nBefore They Shine", image: `${ASSET}/harshal.webp` },
];

export function MeetOurTeam() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-fk-dark">
          Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-fk-red to-fk-orange">Our Team</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Founders Card - spans 2 columns */}
        <div className="sm:col-span-2 rounded-[20px] overflow-hidden min-h-[350px]">
          <Image
            src={`${ASSET}/founders-img.webp`}
            alt="Collabio Founders"
            width={800}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Individual Team Members */}
        {teamMembers.map((member) => (
          <div key={member.name} className="rounded-[20px] overflow-hidden bg-[#f7f7f7] border border-[#eee] hover:shadow-md transition-shadow">
            <div className="h-[260px] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={350}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="p-4 pt-4 pb-5">
              <p className="text-[16px] font-bold text-fk-dark mb-1">{member.name}</p>
              <p className="text-[13px] text-[#777] leading-[1.5]">
                {member.role.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
