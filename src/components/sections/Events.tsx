import React, { useState } from 'react';
import events from '../../data/events';
import { Calendar, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState(events[0]);

  return (
    <section id="events" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Upcoming <span className="text-red-500">Events</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join us at these industry events where our team will be sharing insights, 
            showcasing our solutions, and connecting with the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Event Tabs */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeEvent.id === event.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}
                onClick={() => setActiveEvent(event)}
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="flex items-center text-sm opacity-80 mb-1">
                  <Calendar size={14} className="mr-1" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <MapPin size={14} className="mr-1" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Event Details */}
          <div 
            className="lg:col-span-3 bg-gray-900 rounded-lg overflow-hidden"
            data-aos="fade-left"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{activeEvent.title}</h3>
              </div>
              <div className="flex space-x-4 mb-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-red-500" />
                  {activeEvent.date}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-red-500" />
                  {activeEvent.location}
                </div>
              </div>
              <p className="text-gray-300">{activeEvent.description}</p>
              <div className="mt-6">
                <button className="px-6 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;