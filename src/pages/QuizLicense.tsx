import { motion } from "framer-motion";

const QuizLicense = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert max-w-none prose-h2:text-primary prose-a:text-primary hover:prose-a:text-accent"
        >
          <h1 className="text-4xl md:text-5xl font-display font-black mb-6 glow-text text-center">
            QUIZ PLATFORM LICENSE AGREEMENT
          </h1>
          <p className="text-muted-foreground text-center mb-12">
            Effective Date: 22 April 2026<br />
            Last Updated: 23 April 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">1. DEFINITIONS</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">“Quiz Platform”</strong> refers to all quiz-related features of orbitallearn.com, including quizzes, tests, assessments, leaderboards, scoring systems, and evaluation engines.</li>
                <li><strong className="text-foreground">“System”</strong> includes backend logic, scoring algorithms, anti-cheating mechanisms, and databases.</li>
                <li><strong className="text-foreground">“Content”</strong> includes questions, answers, explanations, test structures, evaluation logic, and multimedia elements.</li>
                <li><strong className="text-foreground">“User”</strong> refers to any individual accessing or participating in quizzes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">2. OWNERSHIP & INTELLECTUAL PROPERTY</h2>
              <p className="text-muted-foreground mb-4">
                All quiz systems, question banks, scoring mechanisms, algorithms, and associated content are the exclusive property of Orbital Learn. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>question design and evaluation logic</li>
                <li>scoring and ranking algorithms</li>
                <li>anti-cheating systems</li>
                <li>leaderboard structures</li>
              </ul>
              <p className="text-muted-foreground font-semibold">Unauthorized use is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">3. LICENSE GRANT</h2>
              <p className="text-muted-foreground mb-4">Users are granted a limited, non-exclusive, non-transferable, and revocable license to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>attempt quizzes</li>
                <li>view results</li>
                <li>participate in rankings</li>
              </ul>
              <p className="text-muted-foreground font-semibold">Strictly for personal and non-commercial use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">4. STRICT ANTI-CHEATING POLICY</h2>
              <p className="text-muted-foreground mb-4">Orbital Learn enforces a zero-tolerance policy for cheating. Users must NOT:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>use external help during quizzes (unless explicitly allowed)</li>
                <li>use multiple accounts to gain advantage</li>
                <li>switch tabs, devices, or sessions to bypass restrictions</li>
                <li>use AI tools, bots, scripts, or automation</li>
                <li>exploit bugs or vulnerabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">5. ENFORCEMENT ACTIONS</h2>
              <p className="text-muted-foreground mb-4">If suspicious activity is detected, Orbital Learn reserves the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>invalidate scores</li>
                <li>remove leaderboard rankings</li>
                <li>revoke certificates or achievements</li>
                <li>restrict quiz access</li>
                <li>suspend or permanently ban accounts</li>
              </ul>
              <p className="text-muted-foreground font-semibold">All decisions are final and non-negotiable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">6. SCORE & RESULT DISCLAIMER</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Quiz results are generated algorithmically</li>
                <li>Orbital Learn does not guarantee absolute accuracy</li>
                <li>Results may be adjusted, reviewed, or invalidated if irregularities are detected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">7. VIDEO CONTENT & COPYRIGHT</h2>
              <p className="text-muted-foreground mb-4">
                All videos, animations, background visuals, and dynamically generated media displayed on the Quiz Platform are the intellectual property of Orbital Learn or its licensors. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>AI-generated videos and dynamic visual content</li>
                <li>background animations used during quizzes</li>
                <li>instructional or explanatory video materials</li>
              </ul>
              <p className="text-muted-foreground mb-4">Users are strictly prohibited from:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>recording, capturing, or downloading video content</li>
                <li>redistributing or sharing video materials</li>
                <li>using video content for commercial or public purposes</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                All AI-generated or dynamically rendered video content remains the exclusive property of Orbital Learn unless explicitly stated otherwise. Any unauthorized use may result in:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>account suspension or termination</li>
                <li>revocation of access or achievements</li>
                <li>legal action where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">8. SYSTEM INTEGRITY & SECURITY</h2>
              <p className="text-muted-foreground mb-4">Users must NOT:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>attempt to hack or manipulate the system</li>
                <li>reverse engineer quiz logic</li>
                <li>perform denial-of-service or overload attacks</li>
                <li>access unauthorized data</li>
              </ul>
              <p className="text-muted-foreground mb-4">Violations may result in:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>immediate termination</li>
                <li>legal action</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">9. DATA USAGE FOR INTEGRITY</h2>
              <p className="text-muted-foreground mb-4">To maintain fairness, Orbital Learn may collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>session activity data</li>
                <li>device/browser information</li>
                <li>behavioral patterns</li>
              </ul>
              <p className="text-muted-foreground mb-4">This data is used solely for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>fraud detection</li>
                <li>system improvement</li>
                <li>security enforcement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">10. SERVICE AVAILABILITY</h2>
              <p className="text-muted-foreground mb-4">Orbital Learn does not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>uninterrupted quiz sessions</li>
                <li>error-free performance</li>
              </ul>
              <p className="text-muted-foreground mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>cancel or restart quizzes</li>
                <li>modify scoring logic</li>
                <li>suspend features temporarily</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">11. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-muted-foreground mb-4">The Quiz Platform is provided “as is” and “as available”. We do not guarantee:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>perfect fairness under all conditions</li>
                <li>uninterrupted operation</li>
                <li>accuracy of rankings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">12. LIMITATION OF LIABILITY</h2>
              <p className="text-muted-foreground mb-4">Orbital Learn shall not be liable for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>loss of scores, rankings, or achievements</li>
                <li>technical interruptions during quizzes</li>
                <li>any indirect or consequential damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">13. INDEMNIFICATION</h2>
              <p className="text-muted-foreground mb-4">Users agree to indemnify and hold harmless Orbital Learn from:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>cheating or misuse of the Platform</li>
                <li>violation of this Agreement</li>
                <li>legal claims arising from user actions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">14. ACCOUNT SUSPENSION & TERMINATION</h2>
              <p className="text-muted-foreground mb-4">Accounts may be suspended or terminated for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>cheating or unfair practices</li>
                <li>manipulation attempts</li>
                <li>repeated suspicious behavior</li>
              </ul>
              <p className="text-muted-foreground font-semibold">Termination may occur without notice.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">15. ELIGIBILITY</h2>
              <p className="text-muted-foreground mb-4">By using the Quiz Platform, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>you meet minimum age requirements (13+ or applicable law)</li>
                <li>you agree to fair-use and integrity rules</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">16. GOVERNING LAW & JURISDICTION</h2>
              <p className="text-muted-foreground mb-2">This Agreement shall be governed by the laws of India.</p>
              <p className="text-muted-foreground">All disputes shall be subject to: <strong className="text-foreground">Courts in Karnataka, India</strong></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">17. CHANGES TO THIS AGREEMENT</h2>
              <p className="text-muted-foreground mb-2">Orbital Learn may update this Agreement at any time.</p>
              <p className="text-muted-foreground">Continued use of the Quiz Platform constitutes acceptance of updated terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold border-b border-border pb-2 mb-4">18. CONTACT</h2>
              <p className="text-muted-foreground mb-2">For legal inquiries:</p>
              <a href="mailto:support@orbitallearn.com" className="text-primary hover:text-accent transition-colors font-medium text-lg">📧 support@orbitallearn.com</a>
            </section>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2026 Orbital Learn. All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizLicense;
