import React from "react";

export default function PrivacyPolicy() {
  // Next.js app directory page component
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-2">GridTsugi: Maze of Woven Bridges</p>
      <p className="mb-2">Effective date: 25 August 2025</p>
      <p className="mb-6">ZenelephantXR Studios ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information our mixed-reality game GridTsugi: Maze of Woven Bridges ("the Game") processes, how it is stored, and your choices.</p>
      <p className="mb-6">This policy applies only to the Game. Platform-level services provided by Meta (e.g., Meta accounts, device OS features, cloud backup) are governed by Meta's own terms and privacy policy.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1) Summary (TL;DR)</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>The Game is designed to work offline and does not require an internet connection.</li>
        <li>We store gameplay data locally on your device only (e.g., scores, levels completed, time taken, and a spatial-anchor room ID to keep your room setup).</li>
        <li>We do not collect personal information, do not use third-party analytics/ads, and do not sell or share data.</li>
        <li>If we later add an optional online leaderboard, we will clearly notify you in-game, request consent (where required), and update this policy before any online transfer.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">2) Information We Process</h2>
      <h3 className="font-semibold mb-1">A. Gameplay & Progress Data (stored locally on device)</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Scores and performance metrics (e.g., score value, time taken to complete a level).</li>
        <li>Progress tracking (e.g., played levels, won levels, total number of levels completed).</li>
        <li>Completion stats (e.g., best times, streaks, attempts).</li>
        <li>We use this data solely to run core game features (continue your progress, show stats/achievements, difficulty tuning on-device).</li>
      </ul>
      <h3 className="font-semibold mb-1">B. Spatial & Room Setup Data (stored locally on device)</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Spatial anchor room ID (or similar anchor/scene identifier) used to remember where you scanned/placed the grid in your room so you don't have to redo setup each time.</li>
        <li>We do not store passthrough video frames or raw room scans ourselves. Any room-mapping, tracking, or sensor processing is handled by the Meta Quest system. We only keep a local identifier that lets the Game relocate your previously placed content.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">3) What We Do Not Collect or Use</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>At present we don't collect any name, email, or phone number</li>
        <li>No facial tracking, camera frames, raw depth/mesh data saved by us.</li>
        <li>No advertising SDKs or third-party analytics.</li>
        <li>No sale or "sharing" (as defined by many privacy laws) of personal data.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">4) Where Your Data Lives & Transfers</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>On-device only (by default): All Game data listed above is saved in the Game's private storage on your Meta Quest device and is not transmitted to us.</li>
        <li>Platform backups: If you enable Meta/Quest cloud backup at the OS level, your device may back up the Game's local data to Meta's cloud. That backup is a platform feature controlled by Meta and your device settings—we do not control or receive that backup.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">5) Legal Bases (for EU/EEA & similar jurisdictions)</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Performance of a contract: We process on-device game data to deliver the Game you chose to play.</li>
        <li>Legitimate interests: Keeping a spatial anchor ID so you don't have to re-scan your room enhances usability and player experience.</li>
        <li>We do not use the data for profiling, advertising, or automated decision-making with legal effects.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">6) Data Retention</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Gameplay & spatial anchor data: Kept only on your device for as long as you keep the Game installed, or until you clear/reset data from the Game's settings (if available) or via your device's app data management.</li>
        <li>Uninstalling the Game typically removes local data stored in the app sandbox (subject to OS behavior and any backups you enabled at the platform level).</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">7) Security</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Data is stored in the Game's private app storage. We rely on the device's operating system sandboxing and platform security.</li>
        <li>We do not add extra encryption beyond what the OS provides. Because all data remains on-device (unless you enable OS backups), risk of third-party access is reduced.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">8) Your Choices & Controls</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Play offline: No network connection is required for core gameplay.</li>
        <li>Reset/clear data: If the Game provides a "Reset Progress" or "Clear Anchors/Room Setup" option, you can use it to remove local data. You can also uninstall the Game.</li>
        <li>Manage backups: Control platform cloud backup in your Meta Quest device settings.</li>
        <li>If you believe your platform backup contains Game data you want deleted, adjust device settings and follow Meta's instructions for deleting app backups.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">9) Children's Privacy</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>The Game should be used only with a Meta account and in accordance with Meta's age policies and parental controls. We do not knowingly collect personal information from children. If you believe a child has provided personal data via the Game, please contact us so we can assist.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">10) Third Parties</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>No third-party SDKs for analytics, ads, or social sharing are integrated at this time.</li>
        <li>Platform providers (Meta) may independently process telemetry or device information per their terms. We do not receive that data.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">11) Future Feature: Optional Online Leaderboards (Not Yet Active)</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>If we add an optional online leaderboard:</li>
        <li>We will clearly notify you in-game before activation and update this Privacy Policy.</li>
        <li>We may process and transmit limited data such as score/time, level identifiers, and a display name or platform account ID necessary to show rankings.</li>
        <li>We will specify where the data is stored (our servers or a trusted leaderboard provider), how long it's retained, and how you can opt out or delete your leaderboard entry.</li>
        <li>We will not use leaderboard data for advertising.</li>
        <li>No online transfers will occur until this section is activated and the policy is updated.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">12) International Use</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Because the current Game is offline, we do not transfer your data internationally. If a future leaderboard is introduced, we will identify any international transfers and apply appropriate safeguards.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">13) Changes to This Policy</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>We may update this policy to reflect changes to the Game or legal requirements. Material changes will be highlighted in-game or on our website, with a new "Effective date."</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">14) Contact Us</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Developer/Publisher: ZenelephantXR Studios</li>
        <li>Email: gridtsugi@gmail.com</li>
        <li>Website: <a href="https://www.zenelephantxr.com" className="text-blue-600 underline">www.zenelephantxr.com</a></li>
      </ul>
    </main>
  );
}
