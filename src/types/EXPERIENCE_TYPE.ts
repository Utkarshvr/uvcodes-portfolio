export default interface EXPERIENCE_TYPE {
  id?: string;
  title: string;
  description?: string[];
  icon?: string;
  organization: string;
  duration: string;
  created_at: { _seconds: number; _nanoseconds: number };
}
