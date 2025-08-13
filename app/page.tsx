import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaTrophy,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Profile() {
  // Generate random stars
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white p-8 font-sans overflow-hidden">
      {/* Starfield */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-5xl font-bold mb-2">Vamshidhar Gullapalli</h1>
          <p className="text-lg text-gray-300">
            Senior AVP – Commercial Banking, Client Insights & Product Management at Wells Fargo  
            | Data Science & Analytics Professional
          </p>
        </header>

        {/* About Me */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-4">
            <FaUser className="mr-3 text-blue-400" /> About Me
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Masters in Data Science from Liverpool John Moores University and Post Graduate Diploma in Data Science from IIIT Bangalore.  
            Proven track record in delivering actionable insights, building automation solutions, and developing predictive models that drive measurable business impact.  
            Experienced across banking, logistics, and manufacturing domains, with a strong focus on innovation, process improvement, and stakeholder engagement.
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-4">
            <FaCode className="mr-3 text-green-400" /> Skills
          </h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li>Python</li>
            <li>SQL</li>
            <li>Teradata</li>
            <li>Machine Learning</li>
            <li>NLP</li>
            <li>Data Analytics</li>
            <li>Tableau</li>
            <li>Automation (VBA, Python)</li>
          </ul>
        </section>

        {/* Career Highlights */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-4">
            <FaBriefcase className="mr-3 text-yellow-400" /> Career Highlights
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Designed dashboards & automated reports at Wells Fargo, winning Manager Spotlight Award (Q2 2024).</li>
            <li>At Maersk, built $4M impact recommender engine and filed patent for OCR & NLP-based processing.</li>
            <li>Reduced false hits in sanctions payment screening at HSBC using Python & clustering.</li>
            <li>Led data analysis for braking systems at Brakes India.</li>
          </ul>
        </section>

        {/* Achievements */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-4">
            <FaTrophy className="mr-3 text-orange-400" /> Achievements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Manager Spotlight Award – Wells Fargo (Q2 2024)</li>
            <li>Star of the Month – Maersk (Feb 2022)</li>
            <li>Star Award – Maersk (Q1 2023)</li>
            <li>Team Star Award – HSBC (H1 2021)</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="flex items-center text-3xl font-semibold mb-4">
            <FaEnvelope className="mr-3 text-pink-400" /> Contact
          </h2>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> 
              <a href="mailto:gsrnvk.murty@gmail.com" className="text-blue-400 hover:underline">
                gsrnvk.murty@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2" /> 
              <a href="https://www.linkedin.com/in/gullapallivamsidhar" target="_blank" className="text-blue-400 hover:underline">
                linkedin.com/in/gullapallivamsidhar
              </a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" /> +91 79040 70549
            </p>
            {/* Download Resume Button */}
            <a
              href="/Resume_v2.pdf"
              download
              className="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
            >
              📄 Download Resume
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
