import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

const Trainings: React.FC = () => {
  const events = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      date: 'June 15-16, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Hinjewadi, Pune',
      description: 'Intensive two-day bootcamp covering modern web development technologies and best practices.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      date: 'July 10-12, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Wakad, Pune',
      description: 'Three-day workshop on AI fundamentals, machine learning algorithms, and practical applications.',
      image: 'https://images.pexels.com/photos/7102/notes-macbook-study-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const trainers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      name: 'Alex Morgan',
      expertise: 'Full Stack Development',
      experience: '12+ years',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="pt-20">
      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming <span className="text-red-600">Events</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Join our expert-led training sessions and workshops to enhance your skills
              and stay ahead in the technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={18} className="text-red-500 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={18} className="text-red-500 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="text-red-500 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <button className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-red-600">Trainers</span>
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Learn from industry experts with extensive experience in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="bg-gray-50 rounded-lg p-6 flex items-center space-x-6">
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-red-600 mb-1">{trainer.expertise}</p>
                  <p className="text-gray-600">
                    <Users size={16} className="inline mr-2" />
                    {trainer.experience} experience
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainings;