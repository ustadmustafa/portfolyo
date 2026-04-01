import { GitBranch, GitCommit, GitPullRequest, Star } from "lucide-react";

// Placeholder activity data - to be replaced with real GitHub API integration
const placeholderActivities = [
  {
    type: "commit",
    repo: "cloudsync-api",
    message: "feat: implement conflict resolution algorithm",
    time: "2 hours ago"
  },
  {
    type: "pr",
    repo: "dataflow-engine",
    message: "Add exactly-once semantics support",
    time: "5 hours ago"
  },
  {
    type: "star",
    repo: "rust-patterns",
    message: "Starred rust-patterns/design-patterns",
    time: "1 day ago"
  },
  {
    type: "commit",
    repo: "authvault",
    message: "fix: resolve token refresh race condition",
    time: "2 days ago"
  },
  {
    type: "branch",
    repo: "metricshub",
    message: "Created branch feature/dashboard-v2",
    time: "3 days ago"
  }
];

const activityIcons = {
  commit: GitCommit,
  pr: GitPullRequest,
  star: Star,
  branch: GitBranch
};

// Placeholder contribution grid
const contributionData = Array.from({ length: 52 }, () =>
  Array.from({ length: 7 }, () => Math.random())
);

export function GitHubActivity() {
  return (
    <section id="github" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl font-bold tracking-tight">Code Orbit</h2>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <p className="text-center text-muted-foreground mb-12">
          GitHub activity and contribution history
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution Graph Placeholder */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Contribution Graph
            </h3>
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {contributionData.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => {
                      const intensity = day;
                      let bgClass = "bg-secondary";
                      if (intensity > 0.75) bgClass = "bg-primary";
                      else if (intensity > 0.5) bgClass = "bg-primary/70";
                      else if (intensity > 0.25) bgClass = "bg-primary/40";
                      else if (intensity > 0.1) bgClass = "bg-primary/20";
                      
                      return (
                        <div 
                          key={dayIndex}
                          className={`w-3 h-3 rounded-sm ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Placeholder — Connect GitHub API for live data
            </p>
          </div>

          {/* Recent Activity Feed */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {placeholderActivities.map((activity, index) => {
                const Icon = activityIcons[activity.type as keyof typeof activityIcons];
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-secondary">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">
                        {activity.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-mono">{activity.repo}</span>
                        <span className="mx-2">·</span>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Placeholder — Connect GitHub API for live data
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Repositories", value: "42" },
            { label: "Contributions", value: "1,247" },
            { label: "Stars Earned", value: "386" },
            { label: "Pull Requests", value: "89" }
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
