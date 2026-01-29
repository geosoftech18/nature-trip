import CustomerSlider from '@/components/customer-slider';
import CarRentalsSection from '@/components/car-rentals-section';
import ServiceEcosystemSection from '@/components/service-ecosystem-section';

const mockCustomers = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechCorp',
    quote:
      'This solution has transformed the way we manage our workflow. The intuitive interface and powerful features saved us countless hours.',
    image: '/customer-1.jpg',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'CEO',
    company: 'InnovateLabs',
    quote:
      'Outstanding customer support and a product that actually delivers on its promises. Highly recommend to any growing team.',
    image: '/customer-2.jpg',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Operations Lead',
    company: 'GrowthHub',
    quote:
      'The automation features alone have cut our operational costs by 40%. Best investment we made this year.',
    image: '/customer-3.jpg',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Founder',
    company: 'StartupNow',
    quote:
      'Simple to implement, powerful in execution. This tool has become essential to our daily operations.',
    image: '/customer-4.jpg',
    rating: 5,
  },
  {
    id: '5',
    name: 'Jessica Parker',
    title: 'Director of Marketing',
    company: 'BrandStudio',
    quote:
      'The analytics dashboard gives us insights we never had before. Game-changer for our decision-making process.',
    image: '/customer-5.jpg',
    rating: 5,
  },
  {
    id: '6',
    name: 'Alex Thompson',
    title: 'VP Engineering',
    company: 'DevOps Solutions',
    quote:
      'Reliability and performance are outstanding. Our team productivity has increased significantly since adoption.',
    image: '/customer-6.jpg',
    rating: 5,
  },
];

export default function SliderSection() {
  return (
    <main className="min-h-screen bg-background">
    

      {/* Car Rentals Section */}
      <CarRentalsSection />

      {/* Customer Slider Section */}
      <CustomerSlider customers={mockCustomers} autoPlayInterval={5000} />

      {/* Service Ecosystem Section */}
      <ServiceEcosystemSection />

   
    </main>
  );
}
