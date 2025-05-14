import React from 'react';
import services from '../../data/services';
import { 
  Code, 
  Smartphone, 
  Lightbulb, 
  BarChart, 
  MousePointer, 
  Layers 
} from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: string;
  index: number;
}> = ({ title, description, icon, index }) => {
  const getIcon = () => {
    switch (icon) {
      case 'code': return <Code size={32} />;
      case 'smartphone': return <Smartphone size={32} />;
      case 'lightbulb': return <Lightbulb size={32} />;
      case 'bar-chart': return <BarChart size={32} />;
      case 'mouse-pointer': return <MousePointer size={32} />;
      case 'layers': return <Layers size={32} />;
      default: return <Code size={32} />;
    }
  };

  return (
    <div 
      className="bg-white text-black p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="text-red-500 mb-4">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
      <div className="mt-4">
        <button className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We offer a comprehensive range of technology solutions tailored to meet your business needs
            and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;