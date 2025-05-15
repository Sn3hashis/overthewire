import React from 'react';
import { Shield, Globe, Users, Coffee } from 'lucide-react';

interface AboutPageProps {
  darkMode: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen pt-20 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About OverTheWire</h1>
        
        <div className={`p-8 rounded-lg mb-10 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <div className="mr-6 flex-shrink-0 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield size={32} className="text-blue-600" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                The OverTheWire community can help you to learn and practice security concepts in the form of fun-filled wargames. 
                We aim to provide resources that make it easy for anyone to learn about computer security, 
                encouraging people to share their knowledge and collaborate in a supportive environment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Wargames</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our wargames are designed to teach different security concepts through practical, hands-on exercises. 
              From basic Linux commands to advanced exploitation techniques, our challenges provide a 
              structured path for learning cybersecurity skills.
            </p>
          </div>
          
          <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We're more than just wargames - we're a community of security enthusiasts, professionals, and learners. 
              Our community forums and IRC channels provide spaces for discussion, collaboration, and help when you get stuck.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our History</h2>
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <p className="mb-4">
              OverTheWire was created as a place to learn and teach security concepts in a gamified environment. 
              What started as a small collection of challenges has grown into a comprehensive platform used by 
              thousands of people around the world to develop their security skills.
            </p>
            <p>
              Many of our wargames were rescued from the demise of intruded.net, previously a hub for security challenges. 
              We've maintained and expanded these games to continue their legacy of security education through practical application.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Support OverTheWire</h2>
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-amber-50 dark:bg-amber-900'}`}>
            <div className="flex items-start">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-amber-100 text-amber-600 mr-4 mt-1 flex-shrink-0">
                <Coffee size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Ways to Contribute</h3>
                <p className="mb-4">
                  OverTheWire is maintained by volunteers who are passionate about security education. 
                  There are several ways you can support our mission:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Contribute to our open-source codebase</li>
                  <li>Help create new challenges or improve existing ones</li>
                  <li>Share your knowledge by helping others in our community forums</li>
                  <li>Spread the word about OverTheWire to friends and colleagues</li>
                  <li>Consider a donation to help maintain our servers and services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;