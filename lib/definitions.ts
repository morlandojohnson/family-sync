export type Tasks = {
  id: string;
  title: string;
  description: string;
  due_date: string;
  completed: boolean;
  assigned_to: string | null;
  created_by: string;
  family_id: string;
  created_at: string;
  updated_at: string;
};
