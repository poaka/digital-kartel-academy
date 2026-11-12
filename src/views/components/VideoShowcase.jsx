// View (Component) : Lecteur vidéo officiel (sans autoplay sonore, avec image de couverture poster)

import { ACADEMY_IDENTITY } from '../../models/academyModel';

export default function VideoShowcase({ caption }) {
  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 border border-[#E2E8F0] shadow-md">
      <div className="relative rounded-xl overflow-hidden bg-[#0F172A] aspect-video">
        <video
          controls
          preload="metadata"
          playsInline
          poster={ACADEMY_IDENTITY.media.photoStudio2}
          className="w-full h-full object-cover"
          aria-label="Vidéo de présentation des séances pratiques de Digital Kartel Academy"
        >
          <source src={ACADEMY_IDENTITY.media.promoVideo} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
        </video>
      </div>
      {caption && (
        <p className="text-xs sm:text-sm text-[#475569] text-center font-medium pt-3 px-2">
          {caption}
        </p>
      )}
    </div>
  );
}

