import { FiClock, FiList, FiStar } from 'react-icons/fi'
import { StatCard } from './StatCard'

export function StatsBar() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <StatCard
        label="Tiempo"
        value={<>15<span className="text-base sm:text-lg">s</span></>}
        iconBgClassName="bg-stat-pink"
        iconColorClassName="text-stat-pink-icon"
        icon={<FiClock aria-hidden="true" />}
      />
      <StatCard
        label="Puntaje"
        value={<>13<span className="text-base sm:text-lg"> pts</span></>}
        iconBgClassName="bg-stat-violet"
        iconColorClassName="text-stat-violet-icon"
        icon={<FiStar aria-hidden="true" />}
      />
      <StatCard
        label="Palabras"
        value="3"
        iconBgClassName="bg-stat-mint"
        iconColorClassName="text-stat-mint-icon"
        icon={<FiList aria-hidden="true" />}
      />
    </div>
  )
}
