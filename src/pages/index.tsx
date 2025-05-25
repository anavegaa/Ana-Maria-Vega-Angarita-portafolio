import LeftSidebar from "@/components/organisms/LeftSideBar"
import MainContent from "@/components/organisms/MainContent"
import RightSidebar from "@/components/organisms/RightSideBar"

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar */}
        <div className="hidden lg:block w-80 sticky top-0 self-start">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4">
          <MainContent />
        </div>

        {/* Right Sidebar */}
        <div className="hidden xl:block w-2 sticky top-0 self-start">
          <RightSidebar />
        </div>
      </div>

      {/* Mobile Right Sidebar */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
        <RightSidebar />
      </div>
    </div>
  )
}
