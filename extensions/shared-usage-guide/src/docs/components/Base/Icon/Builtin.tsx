import React from 'react';
import { Icon } from '@ks-console/shared';
import {
  StarHalfDuotone,
  StarDuotone,
  DownloadBox2Duotone,
  ScanCodeDuotone,
  NoteUploadDuotone,
  Gpu,
  WizTelemetry,
  ConvertDuotone,
  KubeEye,
  OperatorFramework,
  CRD,
  KsVersionUpdate,
  ClusterBannerWarning,
} from '@ks-console/shared';

export default function Builtin() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <StarHalfDuotone />
      <StarDuotone />
      <DownloadBox2Duotone />
      <ScanCodeDuotone />
      <NoteUploadDuotone />
      <Gpu />
      <WizTelemetry />
      <ConvertDuotone />
      <KubeEye />
      <OperatorFramework />
      <CRD />
      <KsVersionUpdate />
      <ClusterBannerWarning />
    </div>
  );
}
