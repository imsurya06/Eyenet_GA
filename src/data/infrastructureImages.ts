export interface InfrastructureImage {
  id: string;
  src: string;
  alt: string;
  category: 'lab' | 'classroom' | 'library' | 'campus' | 'other';
}

export const initialInfrastructureImages: InfrastructureImage[] = [
  { id: 'infra-lab-1', src: '/images/pexels-pixabay-256491.jpg', alt: 'Computer Lab', category: 'lab' },
  { id: 'infra-classroom-1', src: '/images/pexels-tima-miroshnichenko-6550407.jpg', alt: 'Classroom', category: 'classroom' },
  { id: 'infra-library-1', src: '/images/pexels-pixabay-356065.jpg', alt: 'Library', category: 'library' },
  { id: 'infra-classroom-2', src: '/images/pexels-gabriel-manjarres-119584478-19064143.jpg', alt: 'Student in classroom', category: 'classroom' },
  { id: 'infra-classroom-3', src: '/images/pexels-meruyert-gonullu-7317589.jpg', alt: 'Lecture Hall', category: 'classroom' },
  { id: 'infra-campus-1', src: '/images/pexels-george-pak-7972494.jpg', alt: 'Students studying outdoors', category: 'campus' },
  { id: 'infra-classroom-4', src: '/images/pexels-yankrukov-8197513.jpg', alt: 'Professor in lecture hall', category: 'classroom' },
  { id: 'infra-campus-2', src: '/images/pexels-rdne-8499580.jpg', alt: 'Campus Building', category: 'campus' },
  { id: 'infra-classroom-5', src: '/images/pexels-pixabay-256395.jpg', alt: 'Empty classroom', category: 'classroom' },
];