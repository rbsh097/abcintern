import OurPeopleSection from "@/components/OurPeople/OurPeopleSection";
import LeadershipBoard from "@/components/OurPeople/LeadershipBoard";
import { leadershipTeam, boardMembers, financeTeam } from "@/components/data/leader";

export default function OurPeoplePage() {
    return (
        <div className="bg-[#F8F9FA] pb-20">
            <OurPeopleSection />

            <div className="space-y-10">
                <LeadershipBoard
                    title="Meet Our Leadership Board"
                    leaders={leadershipTeam}
                />

                <LeadershipBoard
                    title="Meet Our Advisory Board"
                    leaders={boardMembers}
                />

                <LeadershipBoard
                    title="Meet Our Management Board"
                    leaders={financeTeam}
                />
            </div>
        </div>
    );
}