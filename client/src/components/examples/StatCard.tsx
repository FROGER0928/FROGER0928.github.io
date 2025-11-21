import StatCard from '../StatCard';
import { Briefcase } from 'lucide-react';

export default function StatCardExample() {
  return <StatCard icon={Briefcase} value={12} label="作品數量" />;
}
