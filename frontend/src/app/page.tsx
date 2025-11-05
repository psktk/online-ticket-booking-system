import { EventList } from "@/components/EventList";
import { CalendarDays, Search, Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">TicketBooker</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Events
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                My Tickets
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Login
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Discover Amazing Events</h2>
            <p className="text-xl mb-8 text-blue-100">
              Book tickets for concerts, shows, and events near you
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white rounded-lg shadow-md">
                <Search className="h-5 w-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for events, artists, or venues..."
                  className="flex-1 px-4 py-3 text-gray-900 rounded-lg focus:outline-none"
                />
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg transition-colors">
                  <Filter className="h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Upcoming Events
          </h2>
          <p className="text-gray-600">
            Discover the latest concerts and shows
          </p>
        </div>

        <EventList />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>&copy; 2025 TicketBooker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
