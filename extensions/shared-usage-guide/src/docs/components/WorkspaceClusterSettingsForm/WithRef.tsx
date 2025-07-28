import React, { useRef } from 'react';
import { WorkspaceClusterSettingsForm } from '@ks-console/shared';
import { Button } from '@kubed/components';

export default function WithRef() {
  const formRef = useRef<any>(null);

  const handleOk = (formValues: any) => {
    console.log('集群设置:', formValues);
  };

  const handleSubmit = () => {
    if (formRef.current?.form) {
      formRef.current.form.submit();
    }
  };

  return (
    <div style={{ padding: '16px' }}>
      <Button onClick={handleSubmit} style={{ marginBottom: '16px' }}>
        提交表单
      </Button>
      
      <WorkspaceClusterSettingsForm
        ref={formRef}
        onOk={handleOk}
      />
    </div>
  );
} 