import OurPeopleSection from "@/components/OurPeople/OurPeopleSection";
import LeadershipBoard from "@/components/OurPeople/LeadershipBoard";
import PeopleHighlight from "@/components/OurPeople/PeopleHighlight";
import { leadershipTeam, boardMembers, financeTeam } from "@/components/data/leader";

export default function OurPeoplePage() {
    return (
        <div className="">
            <OurPeopleSection />
            <PeopleHighlight />

            <div className="bg-[#F8F9FA]">
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