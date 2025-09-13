export interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export interface TeamMember {
  name: string
  role: string
  image: string
  borderColor: string
}

export interface FAQItem {
  question: string
  answer: string
}