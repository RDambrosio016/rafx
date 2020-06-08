#version 450
#extension GL_ARB_separate_shader_objects : enable

layout (set = 0, binding = 0) uniform texture2D tex;
layout (set = 0, binding = 1) uniform sampler smp;

layout (location = 0) in vec2 inUV;

layout (location = 0) out vec4 outColor;

void main()
{
    vec4 color = texture(sampler2D(tex, smp), inUV);
    //outColor = color;

    // tonemapping
    vec3 mapped = color.rgb / (color.rgb + vec3(1.0));

    outColor = vec4(mapped, color.a);
}
