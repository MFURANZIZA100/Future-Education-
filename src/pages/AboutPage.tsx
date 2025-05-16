export  default function AboutPage() {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">About Future Education</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Dedicated to shaping the leaders of tomorrow through quality education and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Future Education, we believe in the transformative power of education. Our mission is to provide accessible, quality education that prepares students for the challenges of tomorrow.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We aim to foster critical thinking, creativity, and a lifelong love of learning in all our students. By combining traditional educational values with innovative teaching methods, we create an environment where students can thrive.
            </p>
            <p className="text-lg text-gray-600">
              Our commitment extends beyond academic excellence. We strive to develop well-rounded individuals who will make positive contributions to their communities and the world.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c?fit=fillmax&h=500&w=700" 
              alt="Future Education campus" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from teaching to administration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies to enhance the learning experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of honesty, ethics, and respect.
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1732284081114-65109fd62f5d?fit=fillmax&h=400&w=1200" 
            alt="Campus panorama" 
            className="w-full h-72 object-cover object-center"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're a prospective student, parent, or educator, we welcome you to explore what Future Education has to offer.
          </p>
          <button className="btn btn-primary px-8">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
 