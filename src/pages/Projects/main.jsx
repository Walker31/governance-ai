import Button from '@mui/material/Button';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="text-xl font-semibold">Projects Overview</div>
        <Button variant="outlined" startIcon={<AddCircleOutlineSharpIcon />}>
          <span className="px-2 py-1">New Project</span>
        </Button>0
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
          <div className="text-base font-semibold mb-3">AI Compliance Checker</div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded">EU AI Act</span>
            <span className="bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded">ISO 42001</span>
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Subcontrols */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-700">Subcontrols: 27 out of 100</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={(27 / 100) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#f3f4f6',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#fbbf24' },
                }}
              />
            </div>

            {/* Assessments */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-700">Assessments: 20 out of 70</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={(20 / 70) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#f3f4f6',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#a3a3a3' },
                }}
              />
            </div>

            {/* Clauses */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-700">Clauses: 2 out of 24</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={(2 / 24) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#f3f4f6',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#fb7185' },
                }}
              />
            </div>

            {/* Annexes */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-700">Annexes: 4 out of 37</span>
              </div>
              <LinearProgress
                variant="determinate"
                value={(4 / 37) * 100}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#f3f4f6',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#f87171' },
                }}
              />
            </div>
          </div>

          {/* Project Metadata */}
          <div className="flex justify-between items-center text-sm mb-4">
            <div>
              <div className="text-gray-500">Project owner</div>
              <div className="font-medium">VerifyWise Admin</div>
            </div>
            <div className="text-right">
              <div className="text-gray-500">Last updated</div>
              <div className="font-medium">24 June 2025</div>
            </div>
          </div>

          <Button variant="outlined" onClick={() => {navigate('/project-view')}} fullWidth>
            View project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
