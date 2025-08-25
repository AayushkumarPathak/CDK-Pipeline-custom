import * as cdk from 'aws-cdk-lib';
import {DeploymentPipelineStack} from '../lib/deployment-pipeline-stack';

const app = new cdk.App();

new DeploymentPipelineStack(app, 'DeploymentPipelineStack', {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: 'ap-south-1',
    }
})