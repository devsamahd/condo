import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DashboardCard from "../../shared/DashboardCard";
import React from "react";

import VectorMap, {
  Layer,
  Tooltip,
  LoadingIndicator,
  Size,
} from "devextreme-react/vector-map";
// import * as mapsData from "devextreme/dist/js/vectormap-data/usa.js";
import { markers } from "./data";

const mapsData = require("devextreme/dist/js/vectormap-data/usa.js");

const bounds = [-118, 52, -80, 20];

function TooltipTemplate(info: any) {
  const name = info.attribute("name");

  return (
    <>
      <Typography variant="subtitle2" fontSize="12px" fontWeight={500}>{info.attribute("name")}</Typography>
    </>
  );
}

const VisitUsa = () => {
  return (
    <DashboardCard title="Visit From USA" subtitle="Top locations">
      <>
        <Box>
          <Box mb={3} height="250px"
            sx={{
              ".dxm-background": {
                fill: (theme) =>
                  theme.palette.mode == "dark" ? "#111936" : "white",
              },
            }}
          >
            <VectorMap id="vector-map" bounds={bounds}>
              <Size height={220} width="100%" />
              <Layer
                dataSource={mapsData.usa}
                hoverEnabled={false}
                borderColor="#ffffff"
              ></Layer>
              <Layer dataSource={markers} />

              <LoadingIndicator show={true} />
              <Tooltip enabled={true} contentRender={TooltipTemplate} />
            </VectorMap>
          </Box>
          <Stack direction="column" spacing={3}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography variant="h6" fontSize="14px">
                LA
              </Typography>
              <Box width="100%" mt="6px !important">
                <LinearProgress value={28} color="info" variant="determinate" />
              </Box>
              <Typography variant="h6" fontSize="14px">
                28%
              </Typography>
            </Stack>
            {/* 2 */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography variant="h6" fontSize="14px">
                NY
              </Typography>
              <Box width="100%" mt="6px !important">
                <LinearProgress
                  value={21}
                  color="primary"
                  variant="determinate"
                />
              </Box>
              <Typography variant="h6" fontSize="14px">
                21%
              </Typography>
            </Stack>
            {/* 3 */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography variant="h6" fontSize="14px">
                AT
              </Typography>
              <Box width="100%" mt="6px !important">
                <LinearProgress
                  value={18}
                  color="error"
                  variant="determinate"
                />
              </Box>
              <Typography variant="h6" fontSize="14px">
                18%
              </Typography>
            </Stack>
            {/* 4 */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography variant="h6" fontSize="14px">
                CA
              </Typography>
              <Box width="100%" mt="6px !important">
                <LinearProgress
                  value={12}
                  color="warning"
                  variant="determinate"
                />
              </Box>
              <Typography variant="h6" fontSize="14px">
                12%
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </>
    </DashboardCard>
  );
};

export default VisitUsa;
